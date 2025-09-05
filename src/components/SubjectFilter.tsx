import { Subject } from '@/data/schedule';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface SubjectFilterProps {
  subjects: Subject[];
  selectedSubject: Subject | null;
  onSubjectSelect: (subject: Subject | null) => void;
}

const SubjectFilter = ({ subjects, selectedSubject, onSubjectSelect }: SubjectFilterProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Filter by Subject</h3>
        {selectedSubject && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onSubjectSelect(null)}
            className="h-8"
          >
            <X className="h-4 w-4 mr-1" />
            Clear Filter
          </Button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {subjects.map(subject => (
          <Button
            key={subject.id}
            variant={selectedSubject?.id === subject.id ? "default" : "outline"}
            size="sm"
            onClick={() => onSubjectSelect(selectedSubject?.id === subject.id ? null : subject)}
            className="h-auto p-3 text-left justify-start"
          >
            <div className="flex flex-col items-start gap-1">
              <span className="font-medium text-sm">{subject.name}</span>
              <Badge variant="secondary" className="text-xs font-mono">
                {subject.code}
              </Badge>
            </div>
          </Button>
        ))}
      </div>
      
      {selectedSubject && (
        <div className="p-3 bg-accent/50 rounded-lg border border-border/50">
          <p className="text-sm text-accent-foreground">
            Showing schedule for: <span className="font-semibold">{selectedSubject.name}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default SubjectFilter;