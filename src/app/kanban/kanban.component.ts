import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanCard } from '../kanban.types';
import { KanbanColumnComponent } from './kanban-column/kanban-column.component';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { KanbanCardModalComponent } from './kanban-card-modal/kanban-card-modal.component';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule, KanbanColumnComponent, KanbanCardComponent, KanbanCardModalComponent],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.css',
  styles: [`
    .kanban-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 30px 20px;
    }

    .page-header {
      margin-bottom: 30px;
    }

    .page-header h1 {
      margin: 0 0 8px;
      color: #333;
      font-size: 28px;
    }

    .subtitle {
      margin: 0;
      color: #666;
      font-size: 14px;
    }

    .kanban-board {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      align-items: start;
    }

    @media (max-width: 1200px) {
      .kanban-board {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .kanban-board {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class KanbanComponent {
  columns: Array<{ title: string; count: number; cards: any[] }> = [];

  constructor() {
    this.loadColumns();
  }

  loadColumns(): void {
    this.columns = [
      { title: 'To Do', count: 0, cards: [] },
      { title: 'In Progress', count: 0, cards: [] },
      { title: 'In Review', count: 0, cards: [] },
      { title: 'Done', count: 0, cards: [] },
    ];
  }

  onCardDeleted(card: any): void {}

  newCard: any = null;

  saveCard(card: any): void {}

  clearNewCard(): void {
    this.newCard = null;
  }
}