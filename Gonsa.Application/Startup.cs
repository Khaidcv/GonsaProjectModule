using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Gonsa.Data;
using Microsoft.EntityFrameworkCore;
using Gonsa.Repository.Interfaces;
using Gonsa.Repository;
using Microsoft.AspNetCore.Identity;
using Gonsa.Application.Data;
using Gonsa.Application.Models.Account;
using Gonsa.Application.Providers;
using Microsoft.AspNetCore.Authentication.Cookies;
using System;

namespace Gonsa.Application
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // dang
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(options =>
            {
                options.LoginPath = "/Account/login";
                options.LogoutPath = "/Account/Logout";
                options.Cookie.Expiration = TimeSpan.FromDays(30);
                options.SlidingExpiration = true;
            });
            services.Configure<SecurityStampValidatorOptions>(options =>
            options.ValidationInterval = TimeSpan.FromDays(30));

            // Add framework services.
            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                .AddJsonOptions((options) =>
                {
                    // Caasu hinh cho phep api tra json long, entity frameowrk core truy van voi tu khoa include, then include.
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                    // cấu hình lại json format cho datetime
                    options.SerializerSettings.DateFormatString = "dd/MM/yyyy HH:mm";
                });

            // dang
            services.AddTransient<IUserStore<ApplicationUser>, UserStore>();
            services.AddTransient<IRoleStore<ApplicationRole>, RoleStore>();
            services.AddScoped<SignInManager<ApplicationUser>, ApplicationSignInManager>();
            services.AddScoped<CustomStore>();
            services.AddIdentity<ApplicationUser, ApplicationRole>().AddDefaultTokenProviders();
            // end dang


            services.AddTransient<ICustomerRepository, CustomerRepository>();
            services.AddTransient<IWebContractRepository, WebContractRepository>();
            services.AddTransient<IProductRepository, ProductRepository>();
            services.AddTransient<IProductPromotionRepository, ProductPromotionRepository>();
            services.AddTransient<IGonSaConnection, GonsaConnection>(serviceProvider =>
            {
                var connectionString = Configuration.GetConnectionString("BosOnlineContext");
                return new GonsaConnection(connectionString);
            });

            services.AddAntiforgery(options =>
            {
                // Set Cookie properties using CookieBuilder properties†.
                options.FormFieldName = "__RequestVerificationToken";
                options.HeaderName = "X-CSRF-TOKEN-HEADERNAME";
                options.SuppressXFrameOptionsHeader = false;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                // Webpack initialization with hot-reload.
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
