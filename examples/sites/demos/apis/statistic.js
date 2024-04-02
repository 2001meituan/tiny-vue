export default {
  mode: ['pc'],
  apis: [
    {
      name: 'statistic',
      type: 'component',
      props: [
        {
          name: 'value',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '数字显示内容',
            'en-US': 'Digital display content'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'precision',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '精度值',
            'en-US': 'Take precision value'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'title',
          type: 'string | array',
          defaultValue: '',
          desc: {
            'zh-CN': '设置数字内容标题',
            'en-US': 'Set digital content titles'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'group-separator',
          type: 'string',
          defaultValue: ',',
          desc: {
            'zh-CN': '设置千分位标志符',
            'en-US': 'Set Millennial Flag'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'prefix',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置数字内容前缀',
            'en-US': 'Set numerical content prefix'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'suffix',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置数字内容后缀',
            'en-US': 'Set numeric content suffix'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'formatter',
          type: '(value) => {}',
          defaultValue: '',
          desc: {
            'zh-CN': '设置自定义数字格式化',
            'en-US': 'Set custom number formatting'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'value-style',
          type: 'string | object | array',
          defaultValue: '',
          desc: {
            'zh-CN': '设置数字样式',
            'en-US': 'Set Number Style'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'prefix',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '数字内容前置插槽',
            'en-US': 'Digital content front slot'
          },
          mode: ['pc'],
          mfDemo: ''
        },
        {
          name: 'suffix',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '数字内容后置插槽',
            'en-US': 'Digital content rear slot'
          },
          mode: ['pc'],
          mfDemo: ''
        },
        {
          name: 'title',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '数字内容标题插槽',
            'en-US': 'Digital content title slot'
          },
          mode: ['pc'],
          mfDemo: ''
        }
      ]
    }
  ]
}