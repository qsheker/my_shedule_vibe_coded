import { useState } from 'react';
import { subjects, scheduleData, Subject } from '@/data/schedule';
import SubjectCard from '@/components/SubjectCard';
import ScheduleGrid from '@/components/ScheduleGrid';
import SubjectFilter from '@/components/SubjectFilter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, BookOpen, GraduationCap } from 'lucide-react';

const Index = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary border-b border-border/50 shadow-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-foreground/20 rounded-lg">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground">My Schedule</h1>
              <p className="text-primary-foreground/80">Student Academic Planner</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Schedule
            </TabsTrigger>
            <TabsTrigger value="subjects" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Subjects
            </TabsTrigger>
          </TabsList>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card className="bg-gradient-card shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  Weekly Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <SubjectFilter
                  subjects={subjects}
                  selectedSubject={selectedSubject}
                  onSubjectSelect={setSelectedSubject}
                />
                
                <ScheduleGrid
                  schedule={scheduleData}
                  selectedSubject={selectedSubject}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subjects Tab */}
          <TabsContent value="subjects" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map(subject => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
            
            {/* Summary Card */}
            <Card className="bg-gradient-secondary shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Semester Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                    <div className="text-2xl font-bold text-lecture">{subjects.length}</div>
                    <div className="text-sm text-muted-foreground">Total Subjects</div>
                  </div>
                  
                  <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                    <div className="text-2xl font-bold text-practical">
                      {subjects.reduce((sum, s) => sum + s.lectures, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Lecture Hours</div>
                  </div>
                  
                  <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                    <div className="text-2xl font-bold text-independent">
                      {subjects.reduce((sum, s) => sum + s.practicalWork, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Practical Hours</div>
                  </div>
                  
                  <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                    <div className="text-2xl font-bold text-primary">
                      {subjects.reduce((sum, s) => sum + s.lectures + s.practicalWork + s.tutorIndependent + s.studentIndependent, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;