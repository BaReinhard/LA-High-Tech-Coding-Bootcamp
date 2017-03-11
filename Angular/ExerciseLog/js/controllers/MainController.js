// Create MainController

app.controller('MainController', ['$scope', function($scope) {
  // Create Group of Exercises with a default count
  $scope.exercises = [
    {
      name: 'Pushups',
      count: 20
    },
    {
      name: 'Squats',
      count: 15
    },
    {
      name: 'Pullups',
      count: 10
    },
    {
      name: 'Rows',
      count: 10
    },
    {
      name: 'Lunges',
      count: 10
    },
    {
      name: 'Step Ups',
      count: 10
    },
    {
      name: 'Sit Ups',
      count: 15
    }
  ];
  
  // Create function to increment exercise count
  $scope.increase = function(index){
    $scope.exercises[index].count = $scope.exercises[index].count + 1; 
    
  };
    // Create function to decrement exercise count

  $scope.decrease = function(index){
    $scope.exercises[index].count = $scope.exercises[index].count - 1; 
    
  }

}]);
