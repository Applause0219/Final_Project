//會員資料更新
function toggleEdit() {
    const inputs = document.querySelectorAll('input');
    const emailInput = document.getElementById('email');
    const editButton = document.getElementById('editButton');
    const cancelButton = document.getElementById('cancelButton');
    const saveButton = document.getElementById('saveButton');

    inputs.forEach(input => {
        if (input !== emailInput) {
            input.readOnly = !input.readOnly;
        }
    });

    editButton.style.display = 'none';
    cancelButton.style.display = 'inline-block';
    saveButton.style.display = 'inline-block';
}

function cancelEdit() {
    const inputs = document.querySelectorAll('input');
    const editButton = document.getElementById('editButton');
    const cancelButton = document.getElementById('cancelButton');
    const saveButton = document.getElementById('saveButton');

    inputs.forEach(input => {
        input.readOnly = true;
        input.value = input.defaultValue;
    });

    editButton.style.display = 'inline-block';
    cancelButton.style.display = 'none';
    saveButton.style.display = 'none';
}

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.readOnly = true;
        input.defaultValue = input.value; // 保存當前值為預設值
    });
    
    document.getElementById('editButton').style.display = 'inline-block';
    document.getElementById('cancelButton').style.display = 'none';
    document.getElementById('saveButton').style.display = 'none';
    
    alert('個人資訊更新成功！');
});
