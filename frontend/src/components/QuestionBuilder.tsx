import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GripVertical, Copy, Trash2, Plus, X } from "lucide-react";

interface Question {
  id: string;
  type: "text" | "multiple-choice" | "file-upload";
  text: string;
  options?: string[];
}

interface QuestionBuilderProps {
  question: Question;
  index: number;
  onUpdate: (updates: Partial<Question>) => void;
  onDelete: () => void;
  onDuplicate: () => void;
}

const QuestionBuilder = ({
  question,
  index,
  onUpdate,
  onDelete,
  onDuplicate,
}: QuestionBuilderProps) => {
  const handleAddOption = () => {
    const newOptions = [...(question.options || []), ""];
    onUpdate({ options: newOptions });
  };

  const handleUpdateOption = (optionIndex: number, value: string) => {
    const newOptions = [...(question.options || [])];
    newOptions[optionIndex] = value;
    onUpdate({ options: newOptions });
  };

  const handleDeleteOption = (optionIndex: number) => {
    const newOptions = question.options?.filter((_, i) => i !== optionIndex);
    onUpdate({ options: newOptions });
  };

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-start gap-4">
          <button className="mt-2 cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground">
            <GripVertical className="h-5 w-5" />
          </button>
          <div className="flex-1 space-y-4">
            <div className="flex gap-4">
              <Input
                value={question.text}
                onChange={(e) => onUpdate({ text: e.target.value })}
                placeholder="Question Text"
                className="flex-1"
              />
              <Select
                value={question.type}
                onValueChange={(value) =>
                  onUpdate({
                    type: value as Question["type"],
                    options: value === "multiple-choice" ? ["Option 1"] : undefined,
                  })
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                  <SelectItem value="file-upload">File Upload</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {question.type === "multiple-choice" && (
              <div className="space-y-2 pl-4">
                {question.options?.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex gap-2">
                    <Input
                      value={option}
                      onChange={(e) =>
                        handleUpdateOption(optionIndex, e.target.value)
                      }
                      placeholder={`Option ${optionIndex + 1}`}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteOption(optionIndex)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAddOption}
                  className="w-full border-dashed"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Option
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t">
          <Button variant="ghost" size="sm" onClick={onDuplicate}>
            <Copy className="mr-2 h-4 w-4" />
            Duplicate
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDelete}
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionBuilder;
