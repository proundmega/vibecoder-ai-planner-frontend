export enum KanbanStatus {
  TODO = 'Todo',
  IN_PROGRESS = 'In Progress',
  IN_REVIEW = 'In Review',
  DONE = 'Done'
}

export interface KanbanCard {
  id: string;
  title: string;
  description: string;
  assignee?: string;
  priority: 'low' | 'medium' | 'high';
  status: KanbanStatus;
  createdAt: Date;
  tags?: string[];
}

export interface KanbanColumn {
  status: KanbanStatus;
  title: string;
  cards: KanbanCard[];
  count: number;
}
