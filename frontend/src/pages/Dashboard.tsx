import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, Share2, Eye, Pencil, Trash2, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggle from "@/components/ThemeToggle";

interface Form {
  id: string;
  title: string;
  responses: number;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [forms, setForms] = useState<Form[]>([
    { id: "1", title: "Customer Feedback Survey", responses: 50 },
    { id: "2", title: "Event Registration Form", responses: 32 },
    { id: "3", title: "Contact Form", responses: 12 },
  ]);

  const handleCreateForm = () => {
    navigate("/form-builder/new");
  };

  const handleDeleteForm = (id: string) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Left: Logo + (Desktop-only nav) */}
          <div className="flex items-center gap-2 sm:gap-6">
            <Link to="/dashboard" className="flex items-center gap-2">
              <img 
                src="/dark-removebg.png" 
                alt="FormFlow Logo"
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-xl font-bold">FormFlow</span>
            </Link>
            {/* Hide "Dashboard" text on mobile */}
            <nav className="hidden sm:block">
              <Link to="/dashboard" className="text-sm font-medium text-foreground">
                Dashboard
              </Link>
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Create Button: Full text on sm+, icon-only on mobile */}
            <Button 
              onClick={handleCreateForm}
              size="sm"
              className="hidden sm:flex gap-2"
            >
              <Plus className="h-4 w-4" />
              Create New Form
            </Button>
            <Button 
              onClick={handleCreateForm}
              size="icon"
              className="sm:hidden"
              aria-label="Create new form"
            >
              <Plus className="h-4 w-4" />
            </Button>

            <ThemeToggle />
            
            {/* User Avatar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      U
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">My Forms</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Create and manage your forms
          </p>
        </div>

        {/* Show message if no forms */}
        {forms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">You haven't created any forms yet.</p>
            <Button onClick={handleCreateForm} className="mt-4">
              <Plus className="mr-2 h-4 w-4" />
              Create Your First Form
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {forms.map((form) => (
              <Card key={form.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg font-semibold line-clamp-1">
                    {form.title}
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {form.responses} {form.responses === 1 ? "Response" : "Responses"}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-1.5 flex-wrap">
                    {/* Share Button (full on mobile) */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 min-w-[80px] text-xs sm:text-sm"
                      onClick={() => {
                        /* TODO: Implement share logic */
                      }}
                    >
                      <Share2 className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4" />
                      <span className="hidden xs:inline">Share</span>
                    </Button>

                    {/* View Responses */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="p-2"
                      onClick={() => navigate(`/responses/${form.id}`)}
                      aria-label="View responses"
                    >
                      <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Button>

                    {/* Edit */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="p-2"
                      onClick={() => navigate(`/form-builder/${form.id}`)}
                      aria-label="Edit form"
                    >
                      <Pencil className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Button>

                    {/* Delete */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="p-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => handleDeleteForm(form.id)}
                      aria-label="Delete form"
                    >
                      <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;