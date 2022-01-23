$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyGmtDMLVuc4LWMzJya4vAFx1eth0lkuQHGYwfg7IflY1LvK5hh/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            $("#form_alerts").html("<div class='alert alert-success'>Message sent successfully. <i class='far fa-smile-beam'></i></div>")
        },
        error: function (err) {
            $("#form_alerts").html("<div class='alert alert-danger'>Message falied to send. <i class='far fa-sad-tear'></i></div>")

        }
    })
})