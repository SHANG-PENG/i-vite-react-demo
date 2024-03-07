// formGenerator.js  
function createForm() {  
    // 创建一个表单元素  
    var form = document.createElement("form");  
    form.setAttribute("action", "/submit-form"); // 设置表单提交的目标URL  
    form.setAttribute("method", "post"); // 设置表单提交方法  
  
    // 创建输入字段  
    var nameInput = document.createElement("input");  
    nameInput.setAttribute("type", "text");  
    nameInput.setAttribute("name", "name");  
    nameInput.setAttribute("placeholder", "Your Name");  
  
    var emailInput = document.createElement("input");  
    emailInput.setAttribute("type", "email");  
    emailInput.setAttribute("name", "email");  
    emailInput.setAttribute("placeholder", "Your Email");  
  
    // 创建提交按钮  
    var submitButton = document.createElement("input");  
    submitButton.setAttribute("type", "submit");  
    submitButton.setAttribute("value", "Submit");  
  
    // 将输入字段和提交按钮添加到表单中  
    form.appendChild(nameInput);  
    form.appendChild(emailInput);  
    form.appendChild(submitButton);  
  
    // 找到要添加表单的容器元素（例如，具有特定ID的元素）  
    var container = document.getElementById("form-container");  
    if (container) {  
        // 将表单添加到容器中  
        container.appendChild(form);  
    } else {  
        console.error("Container element not found!");  
    }  
}  
  
// 在页面加载完成后调用createForm函数  
window.onload = createForm;

