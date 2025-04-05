@echo off
echo ===================================
echo    正在启动AI信息中心网站...
echo ===================================
echo.

cd /d "%~dp0"

echo 检查Node.js是否已安装...
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [错误] 未检测到Node.js! 请先安装Node.js: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo 检查是否已安装依赖...
if not exist node_modules (
    echo 正在安装依赖(首次运行需要一些时间)...
    npm install
    if %ERRORLEVEL% neq 0 (
        echo [错误] 安装依赖失败!
        pause
        exit /b 1
    )
)

echo.
echo 正在启动开发服务器...
echo 网站将在浏览器中自动打开，如未自动打开请访问: http://localhost:3000
echo.
echo 按Ctrl+C可以停止服务器
echo.

start http://localhost:3000
npm run dev

pause 