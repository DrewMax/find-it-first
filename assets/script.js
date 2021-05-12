
// modal is triggered
$("#task-form-modal").on("show.bs.modal", function() {
    //clear values
    $("#modalDescription", "#modalName", "#modalEmail").val("");
});

$("#task-form-modal").on("shown.bs.modal", function() {
    //highlight areas
    $("#modalDescription", "#modalName", "#modalEmail").trigger("focus")
});

$("#task-form-modal .btn-send").click(function() {
    //get values
    var taskName = $("#modalName").val();
    var taskEmail = $("#modalEmail").val();
    var taskText = $("#modalDescription").val();

    if (taskName && taskEmail && taskText) {
        closeModal()
        // alert("Thank you for your message");
        
    } else {
        alert("Please fill out all fields")
    }


})
var closeModal = function() {
    $("#task-form-modal").modal("hide");
}

