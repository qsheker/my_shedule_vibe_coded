import { Subject } from '@/data/schedule';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Monitor, Users, GraduationCap } from 'lucide-react';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard = ({ subject }: SubjectCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lecture': return 'bg-lecture text-lecture-foreground';
      case 'practical': return 'bg-practical text-practical-foreground';
      case 'independent': return 'bg-independent text-independent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const totalHours = subject.lectures + subject.practicalWork + subject.tutorIndependent + subject.studentIndependent;

  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-foreground truncate pr-2">{subject.name}</CardTitle>
          <Badge variant="secondary" className="shrink-0 text-xs font-mono">
            {subject.code}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {subject.lectures > 0 && (
            <div className="flex items-center gap-2 p-2 rounded-md bg-lecture/10">
              <BookOpen className="h-4 w-4 text-lecture" />
              <div className="text-sm">
                <div className="font-medium text-foreground">Lectures</div>
                <div className="text-muted-foreground">{subject.lectures}h</div>
              </div>
            </div>
          )}
          
          {subject.practicalWork > 0 && (
            <div className="flex items-center gap-2 p-2 rounded-md bg-practical/10">
              <Monitor className="h-4 w-4 text-practical" />
              <div className="text-sm">
                <div className="font-medium text-foreground">Practical</div>
                <div className="text-muted-foreground">{subject.practicalWork}h</div>
              </div>
            </div>
          )}
          
          {subject.tutorIndependent > 0 && (
            <div className="flex items-center gap-2 p-2 rounded-md bg-independent/10">
              <Users className="h-4 w-4 text-independent" />
              <div className="text-sm">
                <div className="font-medium text-foreground">With Tutor</div>
                <div className="text-muted-foreground">{subject.tutorIndependent}h</div>
              </div>
            </div>
          )}
          
          {subject.studentIndependent > 0 && (
            <div className="flex items-center gap-2 p-2 rounded-md bg-muted/50">
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <div className="font-medium text-foreground">Independent</div>
                <div className="text-muted-foreground">{subject.studentIndependent}h</div>
              </div>
            </div>
          )}
        </div>
        
        <div className="pt-2 border-t border-border/50">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Total Hours:</span>
            <span className="font-semibold text-primary">{totalHours}h</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;