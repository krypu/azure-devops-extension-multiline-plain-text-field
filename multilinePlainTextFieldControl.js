function updateFieldValue (workItemServices) {
    workItemServices.WorkItemFormService.getService().then(function (service) {
        var fieldName = VSS.getConfiguration().witInputs.Field;
        var rows = VSS.getConfiguration().witInputs.Rows;

        var heightInPixels = rows * 20 + 6;
        VSS.resize("auto", heightInPixels); 

        var multilinePlainTextField = document.getElementById('multilinePlainTextField');
        multilinePlainTextField.rows = rows;

        service.getFieldValue(fieldName).then(function (value) {
            multilinePlainTextField.value = value;
        });

        multilinePlainTextField.oninput = function() {
            service.setFieldValue(fieldName, multilinePlainTextField.value);
        };
    });
};

VSS.require(["TFS/WorkItemTracking/Services"], function(workItemServices) {
    VSS.register(VSS.getContribution().id, () => {
        return {
            onLoaded: () => {
                updateFieldValue(workItemServices);
            },
            onRefreshed: () => {
                updateFieldValue(workItemServices);
            },
        }
    });
    VSS.notifyLoadSucceeded();
});