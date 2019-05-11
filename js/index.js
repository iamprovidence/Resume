// string format
if (!String.prototype.format) 
{
    String.prototype.format = function() 
    {
        var args = arguments;

        return this.replace(/{(\d+)}/g, function(match, number) 
        { 
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}

$(document).ready(function()
{

    var data_array = 
    [
        {
            year: 2015,
            technologies: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Less', 'SEO']
        },
        {
            year: 2016,
            technologies: ['Photoshop', 'MySql', 'PHP', 'C++', 'OOP', 'Design patterns']
        },
        {
            year: 2017,
            technologies: ['C#', 'Windows Forms', 'Processing', 'Neural networks']
        },
        {
            year: 2018,
            technologies: ['WPF', 'ADO.Net', 'Entity Framework', 'Entity Framework Core']
        },
        {
            year: 2019,
            technologies: ['Java', 'ASP.Net Core', 'Bootstrap']
        },
    ];

var timeline = $("#timeline");
var template = $("#template-block").text();

var isLeft = true;
for (var i = 0; i < data_array.length; ++i)
{
    var technologies = "";
    for (var j = 0; j < data_array[i].technologies.length; ++j)
    {
        technologies += `<li>${data_array[i].technologies[j]}</li>`;
    }

    // append block
    timeline.append(template.format(isLeft ? "left" : "right", data_array[i].year, technologies));
    isLeft =! isLeft;
}
});