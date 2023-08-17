import { Checkbox, Flex, Heading, Separator, Text } from "@radix-ui/themes"

export const AsideFilter = () => {
  return (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <Heading as="h3" size="5">Статус</Heading>
        <Flex gap="1" direction="column">
          <Flex>
            <Text size="2">
              <label>
                <Checkbox mr="1" /> Решенные
              </label>
            </Text>
          </Flex>
          <Flex>
            <Text size="2">
              <label>
                <Checkbox mr="1" /> Нерешенные
              </label>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Separator orientation="horizontal" size="4"/>
      <Flex direction="column" gap="2">
        <Heading as="h3" size="5">Сложность</Heading>
        <Flex gap="1" direction="column">
          <Flex>
            <Text size="2">
              <label>
                <Checkbox mr="1" /> Легкие
              </label>
            </Text>
          </Flex>
          <Flex>
            <Text size="2">
              <label>
                <Checkbox mr="1" /> Средние
              </label>
            </Text>
          </Flex>
          <Flex>
            <Text size="2">
              <label>
                <Checkbox mr="1" /> Сложные
              </label>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Separator orientation="horizontal" size="4"/>
      <Flex direction="column" gap="2">
        <Heading as="h3" size="5">Тип</Heading>
        <Flex gap="1" direction="column">
          <Flex>
            <Text size="2">
              <label>
                <Checkbox mr="1" /> Select
              </label>
            </Text>
          </Flex>
          <Flex>
            <Text size="2">
              <label>
                <Checkbox mr="1" /> DML
              </label>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}