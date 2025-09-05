import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, User, MapPin, Home, ArrowLeft, Upload, X } from "lucide-react";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    university: "",
    major: "",
    graduationYear: "",
    location: "",
    budget: "",
    bio: "",
    interests: [] as string[],
    lifestyle: {
      smoking: "",
      pets: "",
      nightOwl: "",
      cleanliness: "",
    },
    roomType: "",
    verified: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const interestOptions = [
    "Gaming", "Sports", "Music", "Reading", "Cooking", "Art", "Travel",
    "Technology", "Photography", "Fitness", "Movies", "Dancing", "Hiking"
  ];

  const addInterest = (interest: string) => {
    if (!formData.interests.includes(interest)) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, interest]
      }));
    }
  };

  const removeInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Account created successfully!",
      description: "Welcome to RoomieFind. You can now start finding roommates.",
    });
    
    navigate("/dashboard");
    setIsLoading(false);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center space-x-2 text-primary-foreground hover:text-secondary transition-smooth">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <Card className="shadow-glow border-0">
          <CardHeader className="text-center space-y-1">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Home className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">RoomieFind</span>
            </div>
            <CardTitle className="text-2xl">Join RoomieFind</CardTitle>
            <CardDescription>
              Step {step} of 3 - Create your profile to find perfect roommates
            </CardDescription>
            <div className="flex space-x-2 justify-center mt-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-2 rounded-full transition-smooth ${
                    s <= step ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Basic Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@university.edu"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type="password"
                          value={formData.password}
                          onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData(prev => ({...prev, confirmPassword: e.target.value}))}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="university">University</Label>
                      <Input
                        id="university"
                        placeholder="University of California, Berkeley"
                        value={formData.university}
                        onChange={(e) => setFormData(prev => ({...prev, university: e.target.value}))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="major">Major</Label>
                      <Input
                        id="major"
                        placeholder="Computer Science"
                        value={formData.major}
                        onChange={(e) => setFormData(prev => ({...prev, major: e.target.value}))}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Preferences & Lifestyle</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Preferred Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="location"
                          placeholder="Berkeley, CA"
                          value={formData.location}
                          onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Monthly Budget</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500-800">$500 - $800</SelectItem>
                          <SelectItem value="800-1200">$800 - $1,200</SelectItem>
                          <SelectItem value="1200-1600">$1,200 - $1,600</SelectItem>
                          <SelectItem value="1600+">$1,600+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Interests</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {formData.interests.map((interest) => (
                        <Badge key={interest} variant="secondary" className="flex items-center gap-1">
                          {interest}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => removeInterest(interest)}
                          />
                        </Badge>
                      ))}
                    </div>
                    <Select onValueChange={addInterest}>
                      <SelectTrigger>
                        <SelectValue placeholder="Add interests" />
                      </SelectTrigger>
                      <SelectContent>
                        {interestOptions.filter(opt => !formData.interests.includes(opt)).map((interest) => (
                          <SelectItem key={interest} value={interest}>{interest}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Smoking</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, lifestyle: {...prev.lifestyle, smoking: value}}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="occasionally">Occasionally</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Pets</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, lifestyle: {...prev.lifestyle, pets: value}}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="love">Love pets</SelectItem>
                          <SelectItem value="neutral">Neutral</SelectItem>
                          <SelectItem value="allergic">Allergic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Profile & Verification</h3>
                  <div className="space-y-2">
                    <Label htmlFor="bio">About You</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell potential roommates about yourself, your study habits, and what you're looking for in a roommate..."
                      value={formData.bio}
                      onChange={(e) => setFormData(prev => ({...prev, bio: e.target.value}))}
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Verification Documents</Label>
                    <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Upload your resume or LinkedIn profile to verify your student status
                      </p>
                      <Button type="button" variant="outline" size="sm">
                        Choose File
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.verified}
                      onCheckedChange={(checked) => setFormData(prev => ({...prev, verified: !!checked}))}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                    </Label>
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Previous
                  </Button>
                )}
                {step < 3 ? (
                  <Button type="button" onClick={nextStep} className="ml-auto">
                    Next
                  </Button>
                ) : (
                  <Button type="submit" disabled={isLoading || !formData.verified} className="ml-auto">
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                )}
              </div>
            </form>

            {step === 1 && (
              <>
                <Separator />
                <div className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?
                  </p>
                  <Link to="/login">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;