import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

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
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    // 3 秒后自动隐藏提示条
    const timer = setTimeout(() => {
      setShowTip(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {showTip && (
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: "#eef5ff",
            padding: "10px 16px",
            textAlign: "center",
            fontSize: 14,
            color: "#165DFF",
            animation: "fadeOut 0.5s ease 3s forwards",
          }}>
            仅供 安居中学 师生观摩学习使用 · 禁止商用
          </div>
        )}

        <div style={{
          marginTop: showTip ? "50px" : "0",
          transition: "margin 0.5s ease"
        }}>
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

        <style jsx global>{`
          @keyframes fadeOut {
            from { opacity: 1; visibility: visible; }
            to { opacity: 0; visibility: hidden; }
          }
        `}</style>
      </body>
    </html>
  );
}
