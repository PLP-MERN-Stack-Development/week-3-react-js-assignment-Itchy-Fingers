import React from 'react';
import Button from './ui/Button';

export default function Task({ task, onToggle, onDelete }) {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow rounded mb-2">
        <div className="flex items-center">
            <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="mr-2"
            />
            <span className={task.completed ? 'line-through' : ''}>
            {task.text}
            </span>
        </div>
        <Button onClick={() => onDelete(task.id)} className="ml-4">
            Delete
        </Button>
        </div>
    );
}