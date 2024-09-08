import { Module } from '@nestjs/common'
import { RemixController, RemixService } from '~/remix'

@Module({
  imports: [],
  controllers: [RemixController],
  providers: [RemixService]
})
export class AppModule {}
