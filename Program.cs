using Microsoft.Extensions.FileProviders;

namespace LifeSpot;

public class Program
{
    public static void Main(string[] args)
    {
        /*var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        app.UseStaticFiles();
        
        app.MapGet("/", () => Results.File("Views/index.html"));
        app.Run();*/
        
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        // Указание папки для статики и её маршрута
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Static")),
            RequestPath = "/Static"
        });

        // Указать файл по умолчанию
        app.UseDefaultFiles(new DefaultFilesOptions
        {
            DefaultFileNames = new[] { "index.html" }
        });


        app.Run();
    }
}