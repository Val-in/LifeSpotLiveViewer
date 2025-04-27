using Microsoft.Extensions.FileProviders;

namespace LifeSpot;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        app.UseStaticFiles();
        
        app.MapGet("/", () => Results.File("Views/index.html"));
        app.Run();
    }
}