import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "安居中学 PDF 工具（师生观摩版）",
  description: "仅供本校师生学习使用，基于 PDFCraft 开源项目部署",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>

        {/* 3 秒自动消失提示条（纯JS，无React Hooks，不报错） */}
        <div id="school-tip" style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
          background: "#eef5ff",
          padding: "10px 16px",
          textAlign: "center",
          fontSize: 14,
          color: "#165DFF",
        }}>
          仅供 安居中学 师生观摩学习使用 · 禁止商用
        </div>

        <script dangerouslySetInnerHTML={{ __html: `
          setTimeout(() => {
            const tip = document.getElementById('school-tip');
            if (tip) tip.style.display = 'none';
          }, 3000);
        `}} />

        {/* 内容自动下移，不遮挡 */}
        <div style={{ paddingTop: "50px" }}>
          {children}
        </div>

        {/* 底部合规声明 */}
        <div style={{
          width: "100%",
          boxSizing: "border-box",
          marginTop: '40px',
          padding: '20px 16px',
          borderTop: '1px solid #eee',
          textAlign: 'center',
          fontSize: '12px',
          color: '#666',
        }}>
          本工具基于开源项目 PDFCraft 部署，遵循
          <strong> GNU AGPL-3.0 </strong>
          开源协议
          <br />
          原版源码：
          <a
            href="https://github.com/PDFCraftTool/pdfcraft"
            target="_blank"
            style={{ color: '#165DFF', textDecoration: 'none' }}
          >
            https://github.com/PDFCraftTool/pdfcraft
          </a>
        </div>

      </body>
    </html>
  );
}
