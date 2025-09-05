import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  MessageCircle, 
  Heart,
  User,
  Home,
  Settings,
  Users,
  GraduationCap,
  Shield
} from "lucide-react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterBudget, setFilterBudget] = useState("");

  // Mock data for roommate profiles
  const roommates = [
    {
      id: 1,
      name: "Sarah Chen",
      age: 20,
      university: "UC Berkeley",
      major: "Computer Science",
      location: "Berkeley, CA",
      budget: "$800-1200",
      bio: "CS major looking for a study-focused roommate. Love coding, hiking, and cooking Asian food!",
      interests: ["Coding", "Hiking", "Cooking", "Gaming"],
      rating: 4.8,
      verified: true,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      age: 22,
      university: "Stanford",
      major: "Business",
      location: "Palo Alto, CA",
      budget: "$1200-1600",
      bio: "Business student who values cleanliness and quiet study time. Looking for responsible roommates.",
      interests: ["Business", "Fitness", "Reading", "Travel"],
      rating: 4.9,
      verified: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emma Thompson",
      age: 19,
      university: "UC Berkeley",
      major: "Psychology",
      location: "Berkeley, CA",
      budget: "$600-800",
      bio: "Psychology major, early bird, loves plants and creating a cozy living space. Non-smoker.",
      interests: ["Psychology", "Plants", "Yoga", "Music"],
      rating: 4.7,
      verified: true,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Kim",
      age: 21,
      university: "Stanford",
      major: "Engineering",
      location: "Stanford, CA",
      budget: "$1000-1400",
      bio: "Engineering student, clean and organized. Looking for someone who respects study schedules.",
      interests: ["Engineering", "Basketball", "Technology", "Movies"],
      rating: 4.6,
      verified: false,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const filteredRoommates = roommates.filter(roommate => {
    const matchesSearch = roommate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         roommate.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         roommate.university.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !filterLocation || roommate.location.includes(filterLocation);
    const matchesBudget = !filterBudget || roommate.budget.includes(filterBudget);
    
    return matchesSearch && matchesLocation && matchesBudget;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              RoomieFind
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Browse</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>Messages</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Favorites</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Your Perfect Roommate</h1>
          <p className="text-muted-foreground">Discover verified students who match your lifestyle and preferences</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, major, or university..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterLocation} onValueChange={setFilterLocation}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Locations</SelectItem>
                  <SelectItem value="Berkeley">Berkeley, CA</SelectItem>
                  <SelectItem value="Stanford">Stanford, CA</SelectItem>
                  <SelectItem value="Palo Alto">Palo Alto, CA</SelectItem>
                  <SelectItem value="San Francisco">San Francisco, CA</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterBudget} onValueChange={setFilterBudget}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Budgets</SelectItem>
                  <SelectItem value="500-800">$500 - $800</SelectItem>
                  <SelectItem value="800-1200">$800 - $1,200</SelectItem>
                  <SelectItem value="1200-1600">$1,200 - $1,600</SelectItem>
                  <SelectItem value="1600+">$1,600+</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="w-full md:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing {filteredRoommates.length} of {roommates.length} roommates
          </p>
        </div>

        {/* Roommate Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoommates.map((roommate) => (
            <Card key={roommate.id} className="shadow-card hover:shadow-hover transition-smooth cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={roommate.image} alt={roommate.name} />
                      <AvatarFallback>
                        {roommate.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-lg">{roommate.name}</CardTitle>
                        {roommate.verified && (
                          <Shield className="h-4 w-4 text-accent" />
                        )}
                      </div>
                      <CardDescription className="flex items-center space-x-1">
                        <span>{roommate.age} years old</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-secondary text-secondary" />
                          <span>{roommate.rating}</span>
                        </div>
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-smooth">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span>{roommate.major} at {roommate.university}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{roommate.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Home className="h-4 w-4" />
                    <span>{roommate.budget}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {roommate.bio}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {roommate.interests.slice(0, 3).map((interest) => (
                    <Badge key={interest} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                  {roommate.interests.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{roommate.interests.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRoommates.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <User className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <CardTitle className="mb-2">No roommates found</CardTitle>
              <CardDescription>
                Try adjusting your search filters to find more potential roommates.
              </CardDescription>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;