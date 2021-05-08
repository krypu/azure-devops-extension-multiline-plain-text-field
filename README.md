# Multiline Plain Text Field - a custom work item control
## Azure DevOps extension

### Usage

This custom control allows you to add a simple multiline plain text field. You can define it's height by providing a number of rows. A field's width is set automatically to fill your work item form. Text is stored without any formatting as plain text with the exception being new line special symbol: /n

This extension requires you to provide a field reference to store a value. It does not hold any value itself. You can create a new field specifically for that and hide it from the work item layout. The main purpose of this extension is to have a multiline text field WITHOUT formatting. So, the recommended field type is string field, either singleline or multiline text. The tricky part is that in Azure DevOps creating a multiline text field in GUI actually creates an HTML field. On the other hand, a single line field is limited to 255 characters. The only solution to that at this moment (May 2021) is to create a field using API. See the reference page: https://docs.microsoft.com/en-us/rest/api/azure/devops/wit/fields/create?view=azure-devops-rest-6.0 You will notice that along fields such as "html" and "string" there is something named "plainText". That is the recommended field type for this extension, I encourage you to create one using the ADO API. When you add it to your work item layout, you will see that weirdly the edit box for it is a single line one! This is where this extension gets its attention.

Some background story for this extension: https://developercommunity.visualstudio.com/t/Field-type-Textmulti-line-is-showing/1249370

### License

Licensed under the EUPL-1.2-or-later

Full text in 23 official languages is available at https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12