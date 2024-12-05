// app/controllers/employeeController.js
app.controller('EmployeeController', function($scope, $http) {
  $scope.employees = [];
  $scope.newEmployee = {};

  // Fetch employees
  $http.get('http://localhost:3000/employees')
    .then(function(response) {
      $scope.employees = response.data;
    }, function(error) {
      console.error('Error fetching employees:', error);
    });

  // Add new employee
  $scope.addEmployee = function() {
    $http.post('http://localhost:3000/employees', $scope.newEmployee)
      .then(function(response) {
        $scope.employees.push(response.data);
        $scope.newEmployee = {}; // Reset form
      }, function(error) {
        console.error('Error adding employee:', error);
      });
  };

  // Update employee
  $scope.updateEmployee = function(employee) {
    $http.put(`http://localhost:3000/employees/${employee.id}`, employee)
      .then(function(response) {
        console.log('Employee updated:', response.data);
      }, function(error) {
        console.error('Error updating employee:', error);
      });
  };

  // Delete employee
  $scope.deleteEmployee = function(id) {
    $http.delete(`http://localhost:3000/employees/${id}`)
      .then(function(response) {
        $scope.employees = $scope.employees.filter(emp => emp.id !== id);
      }, function(error) {
        console.error('Error deleting employee:', error);
      });
  };
});
