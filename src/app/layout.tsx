import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 这里改成你学校名称
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
        {/* 顶部校内提示条（安全，不影响功能） */}
        <div style={{
          background: '#eef5ff',
          padding: '10px 0',
          textAlign: 'center',
          fontSize: '14px',
          color: '#165DFF'
        }}>
          仅供 安居中学 师生观摩学习使用 · 禁止商用
        </div>

        {children}

        {/* 底部 AGPL 合规声明（必须保留） */}
        <div style={{
          marginTop: '40px',
          padding: '20px 10px',
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
