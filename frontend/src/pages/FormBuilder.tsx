import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Save, Share2, Eye, GripVertical } from "lucide-react";
import QuestionBuilder from "@/components/QuestionBuilder";
import ThemeToggle from "@/components/ThemeToggle";

interface Question {
  id: string;
  type: "text" | "multiple-choice" | "file-upload";
  text: string;
  options?: string[];
}

const FormBuilder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formTitle, setFormTitle] = useState("Untitled Form");
  const [formDescription, setFormDescription] = useState("");
  const [questions, setQuestions] = useState<Question[]>([
    { id: "1", type: "text", text: "What is your name?" },
  ]);

  const handleAddQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: "text",
      text: "New Question",
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleUpdateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, ...updates } : q))
    );
  };

  const handleDeleteQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleDuplicateQuestion = (id: string) => {
    const question = questions.find((q) => q.id === id);
    if (question) {
      const newQuestion = {
        ...question,
        id: Date.now().toString(),
      };
      const index = questions.findIndex((q) => q.id === id);
      const newQuestions = [...questions];
      newQuestions.splice(index + 1, 0, newQuestion);
      setQuestions(newQuestions);
    }
  };

  const handleSave = () => {
    // Save logic here
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Input
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            className="max-w-md border-none text-lg font-semibold focus-visible:ring-0"
          />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Save
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 py-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Form Description</label>
            <Textarea
              placeholder="Add a description for your form..."
              value={formDescription}
              onChange={(e) => setFormDescription(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-4">
            {questions.map((question, index) => (
              <QuestionBuilder
                key={question.id}
                question={question}
                index={index}
                onUpdate={(updates) => handleUpdateQuestion(question.id, updates)}
                onDelete={() => handleDeleteQuestion(question.id)}
                onDuplicate={() => handleDuplicateQuestion(question.id)}
              />
            ))}
          </div>

          <Button
            onClick={handleAddQuestion}
            variant="outline"
            className="w-full border-dashed"
            size="lg"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add Question
          </Button>
        </div>
      </main>
    </div>
  );
};

export default FormBuilder;
