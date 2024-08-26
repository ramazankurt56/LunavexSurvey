using LunavexSurveyServer.DataAccess.Context;
using Microsoft.EntityFrameworkCore;

public class DatabaseMigratorJob : IHostedService
{
    private readonly IServiceProvider _serviceProvider;
    public DatabaseMigratorJob(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;


    }
    public async Task StartAsync(CancellationToken cancellationToken)
    {
        using var scope = _serviceProvider.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        await context.Database.MigrateAsync(cancellationToken);
    }


    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
}
