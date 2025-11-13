import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Upload, CheckCircle2 } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const PublicForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <Card className="w-full max-w-2xl p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-success-bg flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-success-text" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
          <p className="text-lg text-muted-foreground">
            Your response has been submitted successfully.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="container mx-auto max-w-2xl">
        <Card className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Customer Feedback Survey</h1>
            <p className="text-muted-foreground">
              We'd love to hear your thoughts! Please take a moment to fill out this survey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold">
                What is your name?
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your answer"
                required
                className="text-base"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-base font-semibold">
                How satisfied are you with our service?
              </Label>
              <RadioGroup required>
                <div className="flex items-center space-x-2 py-2">
                  <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                  <Label htmlFor="very-satisfied" className="font-normal cursor-pointer">
                    Very Satisfied
                  </Label>
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <RadioGroupItem value="satisfied" id="satisfied" />
                  <Label htmlFor="satisfied" className="font-normal cursor-pointer">
                    Satisfied
                  </Label>
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <RadioGroupItem value="neutral" id="neutral" />
                  <Label htmlFor="neutral" className="font-normal cursor-pointer">
                    Neutral
                  </Label>
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <RadioGroupItem value="dissatisfied" id="dissatisfied" />
                  <Label htmlFor="dissatisfied" className="font-normal cursor-pointer">
                    Dissatisfied
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedback" className="text-base font-semibold">
                Additional feedback
              </Label>
              <Textarea
                id="feedback"
                placeholder="Share your thoughts..."
                className="min-h-[120px] text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file" className="text-base font-semibold">
                Upload a file (optional)
              </Label>
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="relative"
                  onClick={() => document.getElementById("file")?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Choose File
                  <input
                    id="file"
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                </Button>
                {fileName && (
                  <span className="text-sm text-muted-foreground">{fileName}</span>
                )}
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default PublicForm;
