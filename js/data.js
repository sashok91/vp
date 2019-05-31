var data = data || {};
data.exercisesPage = data.exercisesPage || {};

(function () {
  data.exercisesPage.current = 1;
  data.exercisesPage.eList = [
    {
      id: 1,
      name: 'Barbell Deadlift',
      status: 'completed',
      sets: [
        {
          id: '1',
          order: '1',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'done'// todo, in_progress, done, cancelled
        },
        {
          id: '2',
          order: '2',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
        {
          id: '3',
          order: '3',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
        {
          id: '4',
          order: '4',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
      ]
    },
    {
      id: 2,
      name: 'Bent-Over Barbell Deadlift',
      status: 'completed',
      sets: [
        {
          id: '1',
          order: '1',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'done'// todo, in_progress, done, cancelled
        },
        {
          id: '2',
          order: '2',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
        {
          id: '3',
          order: '3',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
        {
          id: '4',
          order: '4',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
      ]
    },
    {
      id: 3,
      name: 'Wide-Grip Pull-Up',
      status: 'in_progress',
      sets: [
        {
          id: '1',
          order: '1',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'done'// todo, in_progress, done, cancelled
        },
        {
          id: '2',
          order: '2',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
        {
          id: '3',
          order: '3',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
        {
          id: '4',
          order: '4',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
      ]
    },
    {
      name: 'Standing T-Bar Row',
      status: 'todo',
      sets: [
        {
          id: '1',
          order: '1',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'done'// todo, in_progress, done, cancelled
        },
        {
          id: '2',
          order: '2',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
        {
          id: '3',
          order: '3',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
        {
          id: '4',
          order: '4',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
      ]
    },
    {
      id: 4,
      name: 'Reverse-Grip Smith Machine Row',
      status: 'cancelled',
      sets: [
        {
          id: '1',
          order: '1',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'done'// todo, in_progress, done, cancelled
        },
        {
          id: '2',
          order: '2',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
        {
          id: '3',
          order: '3',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
        {
          id: '4',
          order: '4',
          type: 'reps',// or time
          reps_plan: '12',
          reps_fact: '',
          weight_plan: '60',
          weight_fact: '',
          status: 'todo'// todo, in_progress, done, cancelled
        },
      ]
    }
  ];

} ());