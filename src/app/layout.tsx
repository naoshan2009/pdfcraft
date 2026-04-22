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
        {/* 顶部提示条（不会被遮挡，自动撑开） */}
        <div style={{
          width: "100%",
          boxSizing: "border-box",
          background: '#eef5ff',
          padding: '12px 16px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#165DFF',
          lineHeight: "1.5",
          position: "relative",
          zIndex: 999,
        }}>
          仅供 安居中学 师生观摩学习使用 · 禁止商用
        </div>

        {/* 关键：给主内容加顶部间距，防止被导航栏遮挡 */}
        <div style={{ paddingTop: "10px" }}>
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
          color: '#666'
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
