import { ScheduleData } from '@/data/schedule';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, User, BookOpen } from 'lucide-react';

interface ScheduleTableProps {
  scheduleData: ScheduleData;
}

const ScheduleTable = ({ scheduleData }: ScheduleTableProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lecture': return 'bg-lecture text-lecture-foreground';
      case 'practice': return 'bg-practical text-practical-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'lecture': return '📚';
      case 'practice': return '💻';
      default: return '📋';
    }
  };

  return (
    <div className="space-y-6">
      {scheduleData.schedule.map((daySchedule) => (
        <Card key={daySchedule.day} className="bg-gradient-card shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Clock className="h-5 w-5 text-primary" />
              {daySchedule.day}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {daySchedule.classes.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[120px]">Время</TableHead>
                    <TableHead>Предмет</TableHead>
                    <TableHead>Аудитория</TableHead>
                    <TableHead>Тип</TableHead>
                    <TableHead>Преподаватель</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {daySchedule.classes.map((classItem, index) => (
                    <TableRow key={index} className="hover:bg-muted/30">
                      <TableCell className="font-mono text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          {classItem.time}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span className="font-medium">{classItem.subject}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{classItem.classroom}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>{getTypeIcon(classItem.type)}</span>
                          <Badge className={`text-xs ${getTypeColor(classItem.type)}`}>
                            {classItem.type}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{classItem.lecturer}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Нет занятий в этот день</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ScheduleTable;