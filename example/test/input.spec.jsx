import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { Input } from '@opentiny/vue'
import { nextTick, ref } from 'vue'
import { randomValues } from './common/globalConfig'

randomValues(global)

let value = ''

describe('input', () => {
  test('maxlength', async () => {
    const wrapper = mount(() => <Input v-model={value} maxlength={5}></Input>)
    expect(wrapper.find('input').attributes().maxlength).toBe('5')
  })

  test('slot', async () => {
    const wrapper = mount(() => <Input v-model={value} v-slots={{
      prepend: () => <>Http://</>
    }}></Input>)
    expect(wrapper.find('.tiny-input-group__prepend').text()).toBe('Http://')
  })

  test('events', async () => {
    const focus = vi.fn()
    const wrapper = mount(() => <Input v-model={value} onFocus={focus}></Input>)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(focus).toHaveBeenCalled()
  })
})