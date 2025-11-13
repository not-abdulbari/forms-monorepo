import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const ResponseViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentResponse, setCurrentResponse] = useState(0);
  const totalResponses = 50;

  const satisfactionData = [
    { label: "Very Satisfied", value: 20 },
    { label: "Satisfied", value: 18 },
    { label: "Neutral", value: 8 },
    { label: "Dissatisfied", value: 4 },
  ];

  const textResponses = [
    "Great service, very happy!",
    "Could be better but overall good",
    "The team was helpful and responsive",
    "I had a positive experience",
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-semibold">Customer Feedback Survey</h1>
              <p className="text-sm text-muted-foreground">{totalResponses} responses</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="summary" className="space-y-6">
          <TabsList>
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="individual">Individual</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How satisfied are you with our service?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {satisfactionData.map((item) => (
                    <div key={item.label} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{item.label}</span>
                        <span className="font-medium">{item.value} responses</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${(item.value / totalResponses) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {textResponses.map((response, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-muted/50 text-sm"
                    >
                      {response}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="individual" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Response {currentResponse + 1} of {totalResponses}
              </h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentResponse(Math.max(0, currentResponse - 1))}
                  disabled={currentResponse === 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setCurrentResponse(Math.min(totalResponses - 1, currentResponse + 1))
                  }
                  disabled={currentResponse === totalResponses - 1}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">What is your name?</h3>
                  <p className="text-muted-foreground">John Doe</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    How satisfied are you with our service?
                  </h3>
                  <p className="text-muted-foreground">Very Satisfied</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Additional feedback</h3>
                  <p className="text-muted-foreground">
                    Great service, very happy with the experience!
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Uploaded file</h3>
                  <Link
                    to="#"
                    className="text-primary hover:underline"
                  >
                    feedback-document.pdf
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ResponseViewer;
