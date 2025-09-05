import { ScheduleItem, Subject, daysOfWeek, timeSlots } from '@/data/schedule';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, User } from 'lucide-react';

interface ScheduleGridProps {
  schedule: ScheduleItem[];
  selectedSubject: Subject | null;
}

const ScheduleGrid = ({ schedule, selectedSubject }: ScheduleGridProps) => {
  const getScheduleItem = (day: string, time: string) => {
    return schedule.find(item => 
      item.day === day && 
      item.time === time &&
      (!selectedSubject || item.subject.id === selectedSubject.id)
    );
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lecture': return 'bg-lecture text-lecture-foreground';
      case 'practical': return 'bg-practical text-practical-foreground';
      case 'independent': return 'bg-independent text-independent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'lecture': return '📚';
      case 'practical': return '💻';
      case 'independent': return '📖';
      default: return '📋';
    }
  };

  return (
    <div className="overflow-auto">
      <div className="min-w-[800px]">
        {/* Header */}
        <div className="grid grid-cols-6 gap-2 mb-4">
          <div className="p-3 text-center font-medium text-muted-foreground bg-muted/30 rounded-lg">
            Time
          </div>
          {daysOfWeek.map(day => (
            <div key={day} className="p-3 text-center font-medium text-foreground bg-gradient-secondary rounded-lg">
              {day}
            </div>
          ))}
        </div>

        {/* Time slots */}
        {timeSlots.map(time => (
          <div key={time} className="grid grid-cols-6 gap-2 mb-2">
            <div className="p-3 text-center font-mono text-sm text-muted-foreground bg-muted/20 rounded-lg flex items-center justify-center">
              <Clock className="h-4 w-4 mr-1" />
              {time}
            </div>
            
            {daysOfWeek.map(day => {
              const item = getScheduleItem(day, time);
              
              return (
                <div key={`${day}-${time}`} className="min-h-[80px]">
                  {item ? (
                    <Card className="h-full bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-200 border-border/50">
                      <CardContent className="p-3 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">{getTypeIcon(item.type)}</span>
                            <Badge className={`text-xs ${getTypeColor(item.type)}`}>
                              {item.type}
                            </Badge>
                          </div>
                          
                          <h4 className="font-semibold text-sm text-foreground leading-tight mb-1">
                            {item.subject.name}
                          </h4>
                          
                          <p className="text-xs font-mono text-muted-foreground mb-1">
                            {item.subject.code}
                          </p>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{item.room}</span>
                          </div>
                          
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <User className="h-3 w-3" />
                            <span className="truncate">{item.teacher}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="h-full bg-muted/20 rounded-lg border-2 border-dashed border-border/30"></div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleGrid;