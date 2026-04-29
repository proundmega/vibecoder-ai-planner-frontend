import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kanban-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban-card.component.html',
  styleUrl: './knban-card.component.css',
  styles: [`
    .kanban-card {
      background: white;
      border-radius: 8px;
      padding: 12px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.2s ease;
      border-left: 3px solid #667eea;
    }

    .kanban-card:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }

    .kanban-card.draggable {
      cursor: grab;
    }

    .kanban-card.draggable:active {
      cursor: grabbing;
    }

    .kanban-card.high {
      border-left-color: #e74c3c;
    }

    .kanban-card.medium {
      border-left-color: #f39c12;
    }

    .kanban-card.low {
      border-left-color: #27ae60;
    }

    .card-content {
      margin-bottom: 8px;
    }

    .card-title {
      margin: 0 0 6px;
      font-size: 14px;
      font-weight: 600;
      color: #333;
      line-height: 1.4;
      word-wrap: break-word;
    }

    .card-description {
      margin: 0;
      font-size: 12px;
      color: #666;
      line-height: 1.4;
      word-wrap: break-word;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid #eee;
    }

    .card-tag {
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .card-tag.high {
      background: #fee;
      color: #c0392b;
    }

    .card-tag.medium {
      background: #fff3cd;
      color: #856404;
    }

    .card-tag.low {
      background: #d4edda;
      color: #155724;
    }

    .card-meta {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .assignee {
      font-size: 14px;
      font-weight: 600;
      color: #667eea;
      background: rgba(102, 126, 234, 0.1);
      padding: 2px 6px;
      border-radius: 4px;
    }

    .delete-btn {
      background: none;
      border: none;
      font-size: 16px;
      color: #999;
      cursor: pointer;
      padding: 2px;
      border-radius: 4px;
      transition: color 0.2s;
    }

    .delete-btn:hover {
      color: #e74c3c;
      background: rgba(231, 76, 60, 0.1);
    }

    .card-attachment {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
      margin-top: 8px;
    }

    .tag {
      background: #e8f4fd;
      color: #667eea;
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 10px;
      font-weight: 500;
    }
  `]
})
export class KanbanCardComponent {
  @Input() card: any = {};
  @Output() delete = new EventEmitter<void>();
}