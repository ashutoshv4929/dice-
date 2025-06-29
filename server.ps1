$port = 8000
$webRoot = Get-Location
Write-Host "Starting server on http://localhost:$port"
Write-Host "Press Ctrl+C to stop the server"

# Start the server
Start-Process "http://localhost:$port"

# Keep the server running
while ($true) {
    Start-Sleep -Seconds 1
}
