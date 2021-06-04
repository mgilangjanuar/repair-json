import { Button, Form, notification, Space, Switch, Typography } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import TextArea from 'antd/lib/input/TextArea'
import djson from 'dirty-json'
import React, { useEffect, useState } from 'react'
import ReactJson from 'react-json-view'


const Home: React.FC = () => {
  const example = {
    object: { text: 'greeting :\n\t"halo"', from: '🤡 unknown', timestamp: 1406543845 },
    string: '{"text":"greeting :\\n\\t"halo"" from: \'🤡 unknown\', timestamp: 01406543845'
  }
  const [form] = useForm()
  const [object, setObject] = useState<any>(example.object)
  const [prettyView, setPrettyView] = useState<boolean>(true)

  useEffect(() => {
    form.setFieldsValue({
      json: example.string
    })
  }, [])

  const onFixIt = async () => {
    const { json } = form.getFieldsValue()
    try {
      const data = djson.parse(json)
      if (typeof data !== 'object') {
        throw new Error('Data is not an object')
      }
      notification.success({
        message: 'Yeay!',
        description: 'Scroll down to check your clean JSON'
      })
      setObject(data)
    } catch (error) {
      notification.error({
        message: 'Oh, shit!',
        description: error.message
      })
      setObject({})
    }
  }

  const clear = async () => {
    form.resetFields()
    setObject({})
  }

  return (
    <div>
      <Typography.Title>Repair JSON</Typography.Title>
      <Form form={form} layout="vertical" onFinish={onFixIt}>
        <Form.Item name="json" required rules={[{ required: true, message: 'This field cannot be blank' }]}>
          <TextArea rows={10} />
        </Form.Item>
        <Form.Item style={{ textAlign: 'right' }}>
          <Space>
            <Button onClick={clear}>Clear</Button>
            <Button type="primary" htmlType="submit">Fix it!</Button>
          </Space>
        </Form.Item>
      </Form>
      <Typography.Title>Result</Typography.Title>
      <Form.Item label="Pretty View &nbsp; ">
        <Switch onChange={checked => setPrettyView(checked)} checked={prettyView} />
      </Form.Item>
      <div>
        {prettyView ? <ReactJson style={{ overflowX: 'auto' }} src={object} theme="bright" /> : <pre>{JSON.stringify(object, null, 2)}</pre>}
      </div>
    </div>
  )
}

export default Home
