import { GithubOutlined, HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined, CoffeeOutlined } from '@ant-design/icons'
import { Divider, Layout, Menu, Typography } from 'antd'
import 'antd/dist/antd.dark.min.css'
import React, { useState } from 'react'
import Home from './pages/home'



function App(): React.ReactElement {
  const [collapsed, setCollapsed] = useState<boolean>()

  return (
    <Layout>
      <Layout.Sider onCollapse={col => setCollapsed(col)} breakpoint="lg" collapsedWidth="0" trigger={null} collapsible collapsed={collapsed} style={{ minHeight: '100vh' }}>
        <Menu style={{ paddingTop: '60px' }} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="2" icon={<GithubOutlined />}><a target="_blank" href="https://github.com/mgilangjanuar/repair-json">GitHub</a></Menu.Item>
          <Menu.Item key="3" icon={<CoffeeOutlined />}><a target="_blank" href="https://paypal.me/mgilangjanuar">Donate</a></Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout>
        {/* <Layout.Header>
          <span onClick={() => setCollapsed(!collapsed)}>{ collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }</span>
        </Layout.Header> */}
        <Layout.Content style={{ padding: 24 }}>
          <p>
            <span onClick={() => setCollapsed(!collapsed)}>{ collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }</span>
          </p>
          <Home />
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          <Divider />
          <Typography.Paragraph>
            Repair JSON &copy; 2021
          </Typography.Paragraph>
          <Typography.Paragraph>
            <a href="https://vercel.com?utm_source=restfire-studio&utm_campaign=oss">
              <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Powered by Vercel" />
            </a>
          </Typography.Paragraph>
        </Layout.Footer>
      </Layout>
    </Layout>
  )
}

export default App
