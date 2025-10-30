using System.Text;

namespace LifeSpot;

public class Startup
{
    
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();
 
            app.UseRouting();
      
            app.UseEndpoints(endpoints =>
            {
                // Маппинг статических файлов
          
                endpoints.MapCss();
                endpoints.MapJs();
                endpoints.MapHtml();
            });
        }
}