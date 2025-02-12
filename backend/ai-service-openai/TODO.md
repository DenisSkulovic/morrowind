1) include nginx to reverse proxy.

2) make sure the worker instance is asynchronously processing multiple tasks. Now it goes one by one.

3) make sure the worker instances consume tasks separately and acknowledge at the end, allowing for multiple instances to run properly.

