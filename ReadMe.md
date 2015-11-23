# Angular filter for ng-repeat directive that evade an isolated scope

### Usage sample:
	<li ng-repeat="item in controller.items | filter:someFilter | To:controller:'filteredItems'" >{{item}}</li>
Where:
* **To** is the filter name
* **controller** is an instance on the scope that have a collection of items named **items** and a property **filteredItems** (notice the quotes) that will contain the filtered items
* **someFilter** is a property of the **$scope**

### Purpose
Given a directive with isolated scope that contains an ng-repeat, the filtered data is hidden from controller outside the mentioned directive. The **To** filter is used to jailbreak that limitation (fixes the limitation of **ng-repeat** alias **as**).