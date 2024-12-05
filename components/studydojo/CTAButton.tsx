"use client"
import { cn } from "@/lib/utils"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/lable"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  schoolName: string;
  role: string;
  studentCount: string;
  teacherCount: string;
}

interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const Step1 = ({ formData, setFormData }: StepProps) => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="firstName">First name*</Label>
      <Input
        id="firstName"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
        required
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="lastName">Last name*</Label>
      <Input
        id="lastName"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        required
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email*</Label>
      <Input
        id="email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
    </div>
  </div>
)

const Step2 = ({ formData, setFormData }: StepProps) => (
  <div className="space-y-4 font-bricolage">
    <div className="space-y-2">
      <Label htmlFor="schoolName">School name*</Label>
      <Input
        id="schoolName"
        value={formData.schoolName}
        onChange={(e) =>
          setFormData({ ...formData, schoolName: e.target.value })
        }
        required
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="role">What is your role?*</Label>
      <Select
        value={formData.role}
        onValueChange={(value) => setFormData({ ...formData, role: value })}
      >
        <SelectTrigger id="role">
          <SelectValue placeholder="Select your role" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="teacher" className="hover:bg-slate-100 cursor-pointer">Teacher</SelectItem>
          <SelectItem value="administrator" className="hover:bg-slate-100 cursor-pointer">Administrator</SelectItem>
          <SelectItem value="counselor" className="hover:bg-slate-100 cursor-pointer">Counselor</SelectItem>
          <SelectItem value="other" className="hover:bg-slate-100 cursor-pointer">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
)

const Step3 = ({ formData, setFormData }: StepProps) => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="studentCount">
        How many IBDP students do your school have in total?*
      </Label>
      <Input
        id="studentCount"
        type="number"
        value={formData.studentCount}
        onChange={(e) =>
          setFormData({ ...formData, studentCount: e.target.value })
        }
        required
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="teacherCount">
        How many IBDP teachers are there in your school?*
      </Label>
      <Input
        id="teacherCount"
        type="number"
        value={formData.teacherCount}
        onChange={(e) =>
          setFormData({ ...formData, teacherCount: e.target.value })
        }
        required
      />
    </div>
  </div>
)

interface MultiStepFormProps {
  onOpenChange: (open: boolean) => void;
}

export function MultiStepForm({ onOpenChange }: MultiStepFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    schoolName: "",
    role: "",
    studentCount: "",
    teacherCount: "",
  })

  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email
      case 2:
        return formData.schoolName && formData.role
      case 3:
        return formData.studentCount && formData.teacherCount
      default:
        return true
    }
  }

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1)
    } else {
      alert("Please fill in all required fields.")
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("Form submitted:", formData)
      alert("Form submitted successfully!")
      onOpenChange(false)
    } else {
      alert("Please fill in all required fields.")
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold">
          {step === 1 && "Let's know each other better"}
          {step === 2 && "Help us better support you"}
          {step === 3 && "Almost there!"}
        </DialogTitle>
        {/* <DialogDescription>Step {step} of 3</DialogDescription> */}
      </DialogHeader>
      <div className="mt-4">
        <form>
          {step === 1 && (
            <Step1 formData={formData} setFormData={setFormData} />
          )}
          {step === 2 && (
            <Step2 formData={formData} setFormData={setFormData} />
          )}
          {step === 3 && (
            <Step3 formData={formData} setFormData={setFormData} />
          )}
        </form>
      </div>
      <div className="mt-6 flex justify-between">
        {step > 1 && (
          <button
            type="button"
            className="border-2 text-black px-4 py-1 rounded-full font-medium text-lg flex gap-1 justify-center items-center"
            onClick={() => setStep(step - 1)}
          >
           <ArrowLeft size={16} strokeWidth={3}/> Previous 
          </button>
        )}
        {step < 3 ? (
          <button type="button" onClick={handleNext} className="ml-auto border bg-brand-primary text-white px-4 py-1 rounded-full font-bold text-lg flex gap-1 justify-center items-center">
            Next <ArrowRight size={16} strokeWidth={3}/>
          </button>
        ) : (
          <button type="submit" onClick={handleSubmit} className="border bg-brand-primary text-white px-4 py-1 rounded-full font-bold text-lg">
            Submit
          </button>
        )}
      </div>
    </div>
  )
}

export function CTAButton({ classname }: { classname?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className={cn("mt-8 flex justify-center", classname)}
          style={{ opacity: 1, transform: "none" }}
        >
          <div
            className={cn(
              "focus-visible:ring-accent-600/50 inline-flex cursor-pointer w-fit items-center justify-center !rounded-full border-2 border-b-4 border-black/10 bg-brand-primary px-5 py-3 text-lg font-bold text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 active:mt-0.5 active:border-b-2 disabled:cursor-not-allowed disabled:opacity-50"
            )}
          >
            Become a partner school
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-md bg-white font-bricolage">
        <MultiStepForm onOpenChange={setOpen} />
      </DialogContent>
    </Dialog>
  )
}
