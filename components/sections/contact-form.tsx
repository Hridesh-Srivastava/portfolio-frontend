"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, Phone, Linkedin, MessageSquare } from "lucide-react"
import axios from "axios"

interface FormData {
  name: string
  email: string
  phone: string
  linkedinProfile: string
  message: string
}

interface SubmitStatus {
  type: "success" | "error" | null
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    linkedinProfile: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: null, message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setSubmitStatus({ type: "error", message: "Name is required" })
      return false
    }
    if (!formData.email.trim()) {
      setSubmitStatus({ type: "error", message: "Email is required" })
      return false
    }
    if (!formData.message.trim()) {
      setSubmitStatus({ type: "error", message: "Message is required" })
      return false
    }
    if (formData.message.trim().length < 10) {
      setSubmitStatus({ type: "error", message: "Message must be at least 10 characters long" })
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000, // 10 seconds timeout
      })

      if (response.data.success) {
        setSubmitStatus({
          type: "success",
          message: response.data.message,
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          linkedinProfile: "",
          message: "",
        })
      }
    } catch (error: any) {
      console.error("Contact form submission error:", error)

      let errorMessage = "Something went wrong. Please try again."

      if (error.response?.data?.error) {
        errorMessage = error.response.data.error
      } else if (error.code === "ECONNABORTED") {
        errorMessage = "Request timeout. Please check your connection and try again."
      } else if (error.code === "ERR_NETWORK") {
        errorMessage = "Network error. Please check your internet connection."
      }

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <Card className="glass-effect border-0 shadow-2xl w-full">
          <CardHeader className="text-center px-4 sm:px-6">
            <CardTitle className="text-xl sm:text-2xl flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <Send className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
              <span>Send Me a Message</span>
            </CardTitle>
            <p className="text-muted-foreground text-sm sm:text-base">
              I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-2 w-full"
                >
                  <Label htmlFor="name" className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Name *</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    disabled={isSubmitting}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 hover:border-primary/50 w-full"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-2 w-full"
                >
                  <Label htmlFor="email" className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Email *</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 hover:border-primary/50 w-full"
                  />
                </motion.div>
              </div>

              {/* Phone and LinkedIn Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-2 w-full"
                >
                  <Label htmlFor="phone" className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Phone (Optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    disabled={isSubmitting}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 hover:border-primary/50 w-full"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-2 w-full"
                >
                  <Label htmlFor="linkedinProfile" className="flex items-center gap-2 text-sm">
                    <Linkedin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="truncate">LinkedIn/Naukri Profile</span>
                  </Label>
                  <Input
                    id="linkedinProfile"
                    name="linkedinProfile"
                    type="url"
                    value={formData.linkedinProfile}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    disabled={isSubmitting}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 hover:border-primary/50 w-full"
                  />
                </motion.div>
              </div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-2 w-full"
              >
                <Label htmlFor="message" className="flex items-center gap-2 text-sm">
                  <MessageSquare className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Message *</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project requirements, ideas, or just say hello..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 hover:border-primary/50 resize-none w-full"
                />
                <p className="text-xs text-muted-foreground">{formData.message.length}/1000 characters</p>
              </motion.div>

              {/* Submit Status */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 sm:p-4 rounded-lg flex items-start gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                      : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm leading-relaxed">{submitStatus.message}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-full"
              >
                <Button
                  type="submit"
                  className="w-full group relative overflow-hidden"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </div>
                </Button>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center text-sm text-muted-foreground px-2"
              >
                <p className="leading-relaxed">
                  I typically respond within 24-48 hours. You can also reach me directly at{" "}
                  <a href="mailto:hrideshsrivastava@outlook.com" className="text-primary hover:underline break-all">
                    hrideshsrivastava@outlook.com
                  </a>
                </p>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
