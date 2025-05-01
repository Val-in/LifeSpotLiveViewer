using Microsoft.Extensions.FileProviders;

namespace LifeSpot;

public class Program
{
    public static void Main(string[] args)
    {
      
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddRouting();
        var app = builder.Build();
        var startup = new Startup();
        startup.Configure(app, builder.Environment);

        // Указание папки для статики и её маршрута
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Static")),
            RequestPath = "/Static"
        });
        
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Views")),
            RequestPath = "/Views"
        });

        // Указать файл по умолчанию
        app.UseDefaultFiles(new DefaultFilesOptions
        {
            DefaultFileNames = new[] { "index.html" }
        });
        
        app.Run();
    }
}