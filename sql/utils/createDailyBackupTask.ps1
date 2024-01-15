# Specify the task name and action
$TaskName = "DailyBackupTask3"
$Action = New-ScheduledTaskAction -Execute "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -Argument 'cd C:/Users/user/Desktop/לימודים/mat_project/sql/utils/ ; node ./createDatabaseDump.js'


# Specify the trigger for daily execution
$Trigger = New-ScheduledTaskTrigger -Daily -At "3:00 AM"


# Create the task
$Task = New-ScheduledTask -Action $Action -Trigger $Trigger -Settings (New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries)


# Register the task
Register-ScheduledTask -TaskName $TaskName -InputObject $Task

