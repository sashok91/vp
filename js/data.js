var data = data || {};
data.exercisesPage = data.exercisesPage || {};

(function () {
  data.exercisesPage.eList = [
    {
      id: 1,
      name: 'Barbell Deadlift',
      status: 'completed',
      type: 'reps',
      sets: [
        {
          id: '1',
          OrderNumber: '1',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          SuggestedRestTime: 80,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
        {
          id: '2',
          OrderNumber: '2',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          SuggestedRestTime: 80,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
        {
          id: '3',
          OrderNumber: '3',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          SuggestedRestTime: 80,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
        {
          id: '4',
          OrderNumber: '4',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          SuggestedRestTime: 80,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
      ]
    },
    {
      id: 2,
      name: 'Bent-Over Barbell Deadlift',
      status: 'completed',
      type: 'reps',
      sets: [
        {
          id: '1',
          OrderNumber: '1',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          SuggestedRestTime: 20,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
        {
          id: '2',
          OrderNumber: '2',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          SuggestedRestTime: 20,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
        {
          id: '3',
          OrderNumber: '3',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          SuggestedRestTime: 20,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
        {
          id: '4',
          OrderNumber: '4',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          SuggestedRestTime: 20,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
      ]
    },
    {
      id: 3,
      name: 'Wide-Grip Pull-Up',
      status: 'in_progress',
      type: 'reps',
      sets: [
        {
          id: '1',
          OrderNumber: '1',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          SuggestedRestTime: 20,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
        {
          id: '2',
          OrderNumber: '2',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          SuggestedRestTime: 20,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
        {
          id: '3',
          OrderNumber: '3',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          SuggestedRestTime: 20,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
        {
          id: '4',
          OrderNumber: '4',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          status: 'todo'// todo, in_progress, completed, cancelled
        },
      ]
    },
    {
      id: 4,
      name: 'Standing T-Bar Row',
      status: 'todo',
      type: 'reps',
      sets: [
        {
          id: '1',
          OrderNumber: '1',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          status: 'todo'// todo, in_progress, completed, cancelled
        },
        {
          id: '2',
          OrderNumber: '2',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          SuggestedRestTime: 20,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
        {
          id: '3',
          OrderNumber: '3',
          SuggestedRepsMin: '10',
          SuggestedRepsMax: '12',
          ActualReps: '',
          SuggestedWeight: '60',
          ActualWeight: '',
          SuggestedRestTime: 20,
          status: 'todo'// todo, in_progress, completed, cancelled
        },

      ]
    },
    {
      id: 5,
      name: 'Plank',
      status: 'todo',
      type: 'time',
      sets: [
        {
          id: '1',
          OrderNumber: '1',
          SuggestedExerciseTime: 70,
          ActualExerciseTime: '',
          SuggestedRestTime: 20,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
        {
          id: '2',
          OrderNumber: '2',
          SuggestedExerciseTime: 60,
          ActualExerciseTime: '',
          SuggestedRestTime: 20,
          status: 'todo'// todo, in_progress, completed, cancelled
        },
        {
          id: '3',
          OrderNumber: '3',
          SuggestedExerciseTime: 50,
          ActualExerciseTime: '',
          SuggestedRestTime: 20,
          status: 'todo'// todo, in_progress, completed, cancelled
        },

      ]
    }
  ];

} ());