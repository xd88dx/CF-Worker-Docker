export default {
  async fetch(request, env, ctx) {
    const currentYear = new Date().getFullYear();
    const author = env.author || "developer";

    const html = `
      <!DOCTYPE html>
      <html lang="zh-CN">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>欢迎使用</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  primary: '#3B82F6',
                  secondary: '#10B981',
                },
                fontFamily: {
                  sans: ['Inter', 'system-ui', 'sans-serif'],
                },
              },
            }
          }
        </script>
        <style type="text/tailwindcss">
          @layer utilities {
            .text-shadow {
              text-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .card-hover {
              transition: all 0.3s ease;
            }
            .card-hover:hover {
              transform: translateY(-5px);
              box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
            .author-link {
              color: #3B82F6;
              text-decoration: none;
              transition: color 0.2s ease;
            }
            .author-link:hover {
              color: #2563EB;
              text-decoration: underline;
            }
          }
        </style>
      </head>
      <body class="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex flex-col items-center justify-center p-4">
        <div class="max-w-md w-full bg-white rounded-2xl shadow-lg overflow-hidden card-hover mb-8">
          <div class="bg-primary p-6 text-center">
            <i class="fa fa-cloud text-white text-4xl mb-3"></i>
            <h1 class="text-white text-xl font-bold text-shadow">欢迎使用本镜像</h1>
          </div>
          <div class="p-6">
            <p class="text-gray-700 mb-4 text-center">
              使用说明请访问我们的GitHub仓库
            </p>
            <a href="https://github.com/xd88dx/cfwork-docker"
               target="_blank"
               class="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 mb-3 w-full">
              <i class="fa fa-github"></i>
              <span>访问GitHub仓库</span>
            </a>
            <div class="text-center text-gray-500 text-sm">
              <p>如果觉得有用，请给我们一个 <i class="fa fa-star text-yellow-400"></i> 吧！</p>
            </div>
          </div>
          <div class="bg-gray-50 py-3 px-6 text-center text-gray-500 text-xs">
            <p>感谢您的使用与支持</p>
          </div>
        </div>

        <footer class="mt-8 py-3 px-4 text-center text-gray-500 text-sm">
          <p>Copyright © ${currentYear} <a href="https://github.com/xd88dx" target="_blank" class="author-link">${author}</a></p>
        </footer>
      </body>
      </html>
    `;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
      },
    });
  },
};
