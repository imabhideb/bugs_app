export const columns = [
    { title: 'Issues', field: 'issue' },
    { title: 'Status', field: 'status', lookup: { done: 'Done', inProgress: 'In Progress', todo: 'To Do' } },
  ];